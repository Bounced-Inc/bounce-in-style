 #!/bin/bash
npx prettier --write "$@"
npx eslint --cache --fix "$@"
echo "🧹 Formatted and fixed"