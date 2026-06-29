/**
 * Validation utilities
 * Centralized validation functions to avoid duplication
 */

/**
 * Check if a string is a valid UUID v4
 * @param value - String to validate
 * @returns true if valid UUID, false otherwise
 */
export const isUuid = (value: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
};
