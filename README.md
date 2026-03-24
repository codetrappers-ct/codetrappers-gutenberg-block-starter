# Coetrappers Gutenberg Block Starter

`coetrappers-gutenberg-block-starter` is a gutenberg block starter for the Coetrappers project set.
Starter repository for custom Gutenberg block development.
The codebase is scaffolded to be a clean starting point, not a complete production feature.

## Project Summary

- Slug: `coetrappers-gutenberg-block-starter`
- Type: Gutenberg block starter
- Focus: gutenberg, blocks, starter

## What This Repository Includes

- Block metadata in `block.json`
- Starter React-based block registration
- Build scripts using `@wordpress/scripts`
- Simple edit and save implementations as a base

## Recommended Project Structure

- `block.json`: block metadata
- `src/index.js`: block registration and editor UI
- `package.json`: build tooling scripts

## Setup

- Run `npm install`.
- Use `npm run start` during development or `npm run build` for production assets.
- Update the block name, icon, and editor implementation to match the feature.

## How To Extend It

- Change the block name and metadata before publishing.
- Build assets before testing in WordPress.
- Keep editor UI and save output intentionally simple until the content model is stable.

## Development Notes

- The generated code favors readability and a low-friction starting structure.
- Credentials, provider integrations, persistence rules, and deployment concerns still need to be implemented for real use.
- Review capability checks, sanitization, and data storage choices before using any starter in production.

## Roadmap

- Add inspector controls and block attributes.
- Introduce styling and block variations.
- Set up testing for block registration and editor behavior.

## WordPress Usage

- Copy the folder into `wp-content/plugins`.
- Activate the plugin from wp-admin.
- Extend the main class under `includes/` or split logic into additional classes as the plugin grows.

## Production Hardening Checklist

- Add nonce handling and permission checks for every form or action.
- Add automated tests and linting before release.
- Validate plugin behavior against the target WordPress and PHP versions.
