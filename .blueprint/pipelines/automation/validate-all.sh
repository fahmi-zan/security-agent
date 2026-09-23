#!/usr/bin/env bash
set -e
echo "Running Validation Engine..."
echo "Checking directories..."
[ -d ".blueprint/core" ] || { echo "Missing core"; exit 1; }
echo "Validation passed."
