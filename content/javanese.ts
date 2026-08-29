/**
 * JAVANESE (AKSARA JAWA) TEXT CONFIGURATION
 *
 * Nama: ꦄꦢꦶꦠ꧀ꦪ ꦮꦶꦢꦶꦪꦤ꧀ꦠꦺꦴ = Aditya Widiyanto
 *
 * Edit ONLY this file to change Javanese text.
 * Do NOT edit component files for text changes.
 *
 * Font: Noto Sans Javanese (loaded via Google Fonts)
 * Unicode Block: U+A980–U+A9DF (Javanese)
 */

export const javanese = {
  /**
   * Full name in Javanese script
   * ꦄꦢꦶꦠ꧀ꦪ ꦮꦶꦢꦶꦪꦤ꧀ꦠꦺꦴ = Aditya Widiyanto
   */
  name: "ꦄꦢꦶꦠ꧀ꦪ ꦮꦶꦢꦶꦪꦤ꧀ꦠꦺꦴ",

  /**
   * Short name glyphs for scatter/assemble hero animation
   * ꦄꦢꦶꦠ꧀ꦪ = Aditya (5 glyph units)
   */
  nameGlyphs: ["ꦄ", "ꦢꦶ", "ꦠ꧀", "ꦪ", ""],

  /**
   * Greeting — "Sugeng" (selamat/greetings in Javanese)
   */
  greeting: "ꦱꦸꦒꦼꦁ",

  /**
   * "Karya" = Work/Portfolio
   */
  work: "ꦏꦂꦪ",

  /**
   * "Bab Aku" = About Me
   */
  about: "ꦧꦧ꧀ꦄꦏꦸ",

  /**
   * "Teknologi"
   */
  technology: "ꦠꦺꦏꦤꦺꦴꦭꦺꦴꦒꦶ",

  /**
   * "Sesambungan" = Contact/Connection
   */
  contact: "ꦱꦼꦱꦩ꧀ꦧꦸꦔꦤ꧀",

  /**
   * Footer phrase — greeting
   */
  hello: "ꦱꦸꦒꦼꦁ ꦱꦥꦲꦤ꧀",

  /**
   * Signature watermark
   * ꦄꦢꦶꦠ꧀ꦪ · ꦢꦶꦗꦶꦠꦭ꧀ = Aditya · Digital
   */
  signature: "ꦄꦢꦶꦠ꧀ꦪ · ꦢꦶꦗꦶꦠꦭ꧀",
} as const;

export type Javanese = typeof javanese;
