interface Hsl {
  h: number;
  s: number;
  l: number;
}

export function CalculateHue(r: number, g: number, b: number, cmax: number, delta: number) {
  let h = 0;
  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    h = ((g - b) / delta) % 6;
  } else if (cmax == g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  return h;
}

export function CalculateSaturation(cmax: number, cmin: number, delta: number) {
  let s;

  if (delta === 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * ((cmax + cmin) / 2) - 1));
  }

  return +(s * 100).toFixed(1);
}

export function CalculateLightness(cmax: number, cmin: number) {
  let l = (cmax + cmin) / 2;
  return +(l * 100).toFixed(1);
}

function HexToHsl(hexCode: string): Hsl {
  const r = parseInt(hexCode[1] + hexCode[2], 16) / 255;
  const g = parseInt(hexCode[3] + hexCode[4], 16) / 255;
  const b = parseInt(hexCode[5] + hexCode[6], 16) / 255;

  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;

  const h = CalculateHue(r, g, b, cmax, delta);
  const s = CalculateSaturation(cmax, cmin, delta);
  const l = CalculateLightness(cmax, cmin);

  return { h: h, s: s, l: l };
}

export function CalculateRgb(h: number, c: number, x: number, m: number) {
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
}

export function HslToHex(hsl: Hsl) {
  const s = hsl.s / 100;
  const l = hsl.l / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((hsl.h / 60) % 2) - 1));
  const m = l - c / 2;

  const [r, g, b] = CalculateRgb(hsl.h, c, x, m);

  const rHex = ("0" + r.toString(16)).slice(-2);
  const gHex = ("0" + g.toString(16)).slice(-2);
  const bHex = ("0" + b.toString(16)).slice(-2);

  return "#" + rHex + gHex + bHex;
}

export function GenerateHexCodes(stepData: Array<string>) {
  const stepHexCodes: Array<Array<string>> = [
    [
      "#FF0000",
      "#FF4D00",
      "#FFC700",
      "#FFD600",
      "#ADFF00",
      "#00FF1A",
      "#00FFF0",
      "#0047FF",
      "#4200FF",
      "#BD00FF",
      "#FF00F5",
    ],
    [],
    [],
    [],
  ];

  let hueColour = stepData[0] ? stepData[0] : "#000000";
  let shadeColour = stepData[1] ? stepData[1] : "#000000";
  let tintColour = stepData[2] ? stepData[2] : "#000000";

  // Calculate Shade
  stepHexCodes[1].push(hueColour);
  const hueHsl = HexToHsl(hueColour);
  for (let i = 1; i < 11; i++) {
    const offset = 5 * i;
    stepHexCodes[1].push(HslToHex({ h: hueHsl.h, s: hueHsl.s, l: hueHsl.l - offset }));
  }

  // Calculate Tint
  stepHexCodes[2].push(shadeColour);
  const shadeHsl = HexToHsl(shadeColour);
  for (let i = 1; i < 11; i++) {
    const offset = 5 * i;
    stepHexCodes[2].push(HslToHex({ h: shadeHsl.h, s: shadeHsl.s, l: shadeHsl.l + offset }));
  }

  // Calculate Tone
  stepHexCodes[3].push(tintColour);
  const tintHsl = HexToHsl(tintColour);
  for (let i = 1; i < 11; i++) {
    const offset = 10 * i;
    stepHexCodes[3].push(HslToHex({ h: tintHsl.h, s: tintHsl.s - offset, l: tintHsl.l }));
  }

  return stepHexCodes;
}
