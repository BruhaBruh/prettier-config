module.exports = {
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  endOfLine: 'lf',
  bracketSpacing: true,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
