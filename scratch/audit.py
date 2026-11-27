import os, re

src_files = []
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.jsx', '.js', '.css')):
            src_files.append(os.path.join(root, f))

pattern = re.compile(r'[\'\"](/images/[^\'\"\s]+)[\'\"]')
used = set()
for sf in src_files:
    with open(sf, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
        for m in pattern.findall(content):
            used.add(m)

print(f"Total image references found in src: {len(used)}")
missing = []
for u in sorted(used):
    local_p = os.path.join('public', u.lstrip('/'))
    if not os.path.exists(local_p):
        missing.append(u)
    else:
        sz = os.path.getsize(local_p) / 1024
        print(f"  [OK] {u} ({sz:.1f} KB)")

if missing:
    print(f"\nMISSING / BROKEN ({len(missing)}):")
    for m in missing:
        print(f"  [BROKEN] {m}")
else:
    print("\nZero broken image references!")

disk_files = set(['/images/' + f for f in os.listdir('public/images')])
unused = disk_files - used
print(f"\nUnused on disk in public/images ({len(unused)}):")
for un in sorted(unused):
    print(f"  [UNUSED] {un}")
