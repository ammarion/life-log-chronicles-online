# Deployment Guide for Life Log Chronicles Online

## Prerequisites

- Node.js and npm installed
- Git installed and configured
- GitHub account with appropriate permissions

## Local Development

```sh
# Clone the repository
git clone https://github.com/yourusername/life-log-chronicles-online.git

# Navigate to project directory
cd life-log-chronicles-online

# Install dependencies
npm install

# Start development server
npm run dev
```

## Secure Token Storage with macOS Keychain

We're using macOS Keychain to securely store GitHub credentials. This approach is more secure than environment variables as it leverages the operating system's secure credential storage.

### 1. Store GitHub Token in Keychain

```sh
# Store the GitHub token in macOS Keychain
security add-generic-password -a $USER -s "github-life-log-chronicles" -w "YOUR_TOKEN" -U
```

### 2. Retrieve Token for Deployment

```sh
# Create a helper script to retrieve the token
cat > ~/life-log-chronicles-online/scripts/get-token.sh << 'EOF'
#!/bin/bash
security find-generic-password -a $USER -s "github-life-log-chronicles" -w
EOF

# Make the script executable
chmod +x ~/life-log-chronicles-online/scripts/get-token.sh

# Add to gitignore
echo "scripts/get-token.sh" >> ~/life-log-chronicles-online/.gitignore
```

### 3. Using the Token in Deployment

```sh
# Build the project
npm run build

# Deploy using the token from Keychain
export GITHUB_TOKEN=$(~/life-log-chronicles-online/scripts/get-token.sh)
npx gh-pages -d dist

# Unset the token when done
unset GITHUB_TOKEN
```

## Security Best Practices

1. **NEVER store tokens in code repositories**
2. **NEVER hardcode tokens in deployment files**
3. Use macOS Keychain for secure credential storage
4. Set appropriate expiration dates for tokens
5. Use the minimum required permissions for tokens
6. Rotate tokens regularly
7. Keep your macOS system updated with security patches

## Accessing Tokens Programmatically

For Node.js applications, you can access the token using:

```javascript
const { execSync } = require('child_process');
const token = execSync('~/life-log-chronicles-online/scripts/get-token.sh').toString().trim();

// Use token for GitHub API calls
const octokit = new Octokit({ auth: token });
```

## Automatic Deployment

When you push changes to GitHub, they will be automatically deployed through the configured GitHub Actions workflow.
