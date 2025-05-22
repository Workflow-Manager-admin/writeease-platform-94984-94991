#!/bin/bash
cd /home/kavia/workspace/code-generation/writeease-platform-94984-94991/writeease_platform
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

