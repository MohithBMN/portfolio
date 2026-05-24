import re

# Fix Navbar.jsx
with open('src/components/Navbar.jsx', 'r') as f:
    content = f.read()

# Replace the isFloating logic
content = re.sub(
    r'const isFloating = scrollY > 120',
    'const isMobile = typeof window !== "undefined" && window.innerWidth < 768\n  const isFloating = !isMobile && scrollY > 120',
    content
)

with open('src/components/Navbar.jsx', 'w') as f:
    f.write(content)

print('✓ Navbar.jsx fixed')
