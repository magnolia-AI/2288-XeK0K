# Fix Encoding Error in auth-header.tsx

## Summary
This plan addresses a compilation error caused by an illegal character (likely a null byte or encoding artifact) appended to the end of the `components/auth-header.tsx` file.

## Approach
The investigation using `cat -A` confirmed that the file terminates with hidden special characters (M-oM-?M-= or similar) following the final closing brace. The solution involves reading the file, stripping all content after the correct end of the component (line 157), and rewriting it with proper UTF-8 encoding and standard Unix line endings. This will eliminate the 'Unexpected character' error in the Next.js compilation pipeline.

## Tasks

- [x] **1. Sanitize components/auth-header.tsx of hidden characters** <!-- id:MdFXY6 -->
  Read the file content, truncate it exactly after the final '}' character on line 157, and remove any trailing null bytes or non-printable ASCII characters that were detected in the shell logs.

- [x] **2. Validate file integrity with shell diagnostics** <!-- id:RDn9Zi -->
  Run 'tail -c 5 components/auth-header.tsx | xxd' or 'cat -A' again to ensure no hidden bytes remain at the end of the file.

- [ ] **3. Verify compilation success** <!-- id:cxOSe8 -->
  Trigger a local build or development reload to confirm the 'Unexpected character' error in 'components/auth-header.tsx' is resolved.

---
plan_id: 0icwVfNA
status: executing
created: 2026-02-05T08:06:50.646Z
