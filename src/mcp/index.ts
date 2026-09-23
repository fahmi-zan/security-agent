import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { discoverProject } from "../discovery/index.js";
import { runNativeSecrets, runNativeSast } from "../scanners/native.js";
import { generateThreatModel } from "../core/threat-model.js";

const server = new Server(
  {
    name: "security-agent-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "security_audit",
        description: "Run a full security audit on a specific directory. Returns vulnerabilities found.",
        inputSchema: {
          type: "object",
          properties: {
            dir: {
              type: "string",
              description: "Directory path to audit (e.g., './' or absolute path)",
            },
          },
          required: ["dir"],
        },
      },
      {
        name: "security_threat_model",
        description: "Generate a threat model (assets, boundaries, attack surfaces) for a project.",
        inputSchema: {
          type: "object",
          properties: {
            dir: {
              type: "string",
              description: "Directory path of the project",
            },
          },
          required: ["dir"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "security_audit") {
    const dir = String(request.params.arguments?.dir || process.cwd());
    const secrets = await runNativeSecrets(dir);
    const sast = await runNativeSast(dir);
    const findings = [...secrets, ...sast];

    return {
      content: [
        {
          type: "text",
          text: findings.length === 0 
            ? "✅ No vulnerabilities found." 
            : JSON.stringify(findings, null, 2)
        },
      ],
    };
  }

  if (request.params.name === "security_threat_model") {
    const dir = String(request.params.arguments?.dir || process.cwd());
    const context = await discoverProject(dir);
    const tm = await generateThreatModel(dir, context);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(tm, null, 2)
        },
      ],
    };
  }

  throw new Error(`Tool not found: ${request.params.name}`);
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("🔒 Security Agent MCP Server is running on stdio");
}

run().catch(console.error);
