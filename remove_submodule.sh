#!/bin/bash
# Remove submodule reference from git index
git update-index --remove site/themes/hugo-universal-theme 2>/dev/null || true
git rm --cached --ignore-unmatch .gitmodules 2>/dev/null || true

