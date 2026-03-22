/**
 * All course units. Each unit has its own file: unit-1.js … unit-9.js
 * Import order = display order.
 */
import unit1 from "./unit-1";
import unit2 from "./unit-2";
import unit3 from "./unit-3";
import unit4 from "./unit-4";
import unit5 from "./unit-5";
import unit6 from "./unit-6";
import unit7 from "./unit-7";
import unit8 from "./unit-8";
import unit9 from "./unit-9";

export const allUnits = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9];

export function getUnitById(id) {
  return allUnits.find((u) => u.id === id) ?? null;
}
