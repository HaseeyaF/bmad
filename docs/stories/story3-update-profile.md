# Story 3: Update Profile

## Description
As a logged-in user, I want to update my profile details (name, email, phone, password) so that my account information stays current.

## Acceptance Criteria
1. User must be authenticated (valid JWT required).
2. User can update fields: name, email, phone, password.
3. Password updates must be securely stored (hashed).
4. Successful update returns the updated profile.
5. Invalid/missing token returns `401 Unauthorized`.
6. Invalid input (e.g., malformed email) returns `400 Bad Request`.
