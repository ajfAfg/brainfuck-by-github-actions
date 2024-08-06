#!/bin/bash

gh run list --json databaseId --jq 'map(.databaseId)[]' | xargs -I{} -P0 gh run cancel {}
