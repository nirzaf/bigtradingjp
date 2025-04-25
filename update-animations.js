import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Brand colors from color-codes.md
const BRAND_COLORS = {
  byzantineBlue: [0.243, 0.353, 0.757, 1], // #3E5AC1 in [r,g,b,a] format (0-1 scale)
  ivory: [0.969, 0.969, 0.918, 1], // #F7F7EA
  white: [0.996, 0.996, 0.996, 1], // #FEFEFE
  pumpkin: [0.969, 0.424, 0.035, 1], // #F76C09
  violetBlue: [0.094, 0.267, 0.776, 1], // #1844C6
  safetyOrange: [0.906, 0.49, 0.18, 1], // #E77D2E
};

// Unique animation parameters for each vehicle type
const ANIMATION_STYLES = {
  'sports-car-animation.json': {
    primaryColor: BRAND_COLORS.pumpkin,
    secondaryColor: BRAND_COLORS.violetBlue,
    accentColor: BRAND_COLORS.white,
    animationStyle: 'race', // Fast left-right movement with slight bounce
  },
  'excavator-animation.json': {
    primaryColor: BRAND_COLORS.safetyOrange,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.ivory,
    animationStyle: 'dig', // Up-down arm movement
  },
  'bulldozer-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.safetyOrange,
    accentColor: BRAND_COLORS.white,
    animationStyle: 'push', // Slight forward-backward movement
  },
  'dump-truck-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.safetyOrange,
    accentColor: BRAND_COLORS.ivory,
    animationStyle: 'dump', // Tilt bed animation
  },
  'equipment-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.pumpkin,
    accentColor: BRAND_COLORS.white,
    animationStyle: 'rotate', // Slow rotation
  },
  'forklift-animation.json': {
    primaryColor: BRAND_COLORS.safetyOrange,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.ivory,
    animationStyle: 'lift', // Fork lifting animation
  },
  'truck-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.byzantineBlue,
    accentColor: BRAND_COLORS.white,
    animationStyle: 'drive', // Smooth forward movement with wheel rotation
  },
  'car-animation.json': {
    primaryColor: BRAND_COLORS.byzantineBlue,
    secondaryColor: BRAND_COLORS.ivory,
    accentColor: BRAND_COLORS.safetyOrange,
    animationStyle: 'cruise', // Gentle floating with slight tilt
  },
  'luxury-car-animation.json': {
    primaryColor: BRAND_COLORS.violetBlue,
    secondaryColor: BRAND_COLORS.white,
    accentColor: BRAND_COLORS.pumpkin,
    animationStyle: 'glide', // Smooth movement with subtle shine effects
  },
};

// Function to update colors in a Lottie animation
function updateColors(animation, colors) {
  // Deep clone to avoid reference issues
  const animationCopy = JSON.parse(JSON.stringify(animation));
  
  // Function to recursively update color values
  function updateColorValues(obj) {
    if (!obj) return;
    
    // If this is a color property
    if (obj.c && obj.c.k && Array.isArray(obj.c.k) && obj.c.k.length === 4) {
      // Determine which color to use based on the original color
      const originalColor = obj.c.k;
      
      // Simple heuristic: if it's reddish, use primary color
      if (originalColor[0] > 0.7 && originalColor[1] < 0.3 && originalColor[2] < 0.3) {
        obj.c.k = colors.primaryColor;
      } 
      // If it's blueish, use secondary color
      else if (originalColor[2] > 0.7 && originalColor[0] < 0.3) {
        obj.c.k = colors.secondaryColor;
      }
      // If it's very light (close to white), use accent color
      else if (originalColor[0] > 0.8 && originalColor[1] > 0.8 && originalColor[2] > 0.8) {
        obj.c.k = colors.accentColor;
      }
      // For other colors, use a mix or keep original
    }
    
    // Recursively process all properties
    if (typeof obj === 'object') {
      for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
          updateColorValues(obj[key]);
        }
      }
    }
  }
  
  // Process all layers
  if (animationCopy.layers) {
    animationCopy.layers.forEach(layer => {
      updateColorValues(layer);
    });
  }
  
  return animationCopy;
}

// Function to add unique animation styles
function addUniqueAnimation(animation, style) {
  // Deep clone to avoid reference issues
  const animationCopy = JSON.parse(JSON.stringify(animation));
  
  // Extend animation duration to 180 frames for smoother animations
  animationCopy.op = 180;
  
  // Find the main shape layer (usually the first one)
  const mainLayer = animationCopy.layers.find(layer => layer.ty === 4);
  if (!mainLayer) return animationCopy;
  
  // Modify animation based on style
  switch (style) {
    case 'race':
      // Fast left-right movement with slight bounce
      if (mainLayer.ks && mainLayer.ks.p) {
        mainLayer.ks.p.a = 1; // Animated
        mainLayer.ks.p.k = [
          { t: 0, s: [120, 150, 0], e: [180, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 45, s: [180, 150, 0], e: [120, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 90, s: [120, 150, 0], e: [180, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 135, s: [180, 150, 0], e: [120, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [120, 150, 0] }
        ];
      }
      break;
      
    case 'dig':
      // Up-down arm movement
      if (mainLayer.ks && mainLayer.ks.r) {
        mainLayer.ks.r.a = 1; // Animated
        mainLayer.ks.r.k = [
          { t: 0, s: [0], e: [15], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 60, s: [15], e: [-15], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 120, s: [-15], e: [0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [0] }
        ];
      }
      break;
      
    case 'push':
      // Slight forward-backward movement
      if (mainLayer.ks && mainLayer.ks.p) {
        mainLayer.ks.p.a = 1; // Animated
        mainLayer.ks.p.k = [
          { t: 0, s: [150, 150, 0], e: [160, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 90, s: [160, 150, 0], e: [150, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [150, 150, 0] }
        ];
      }
      break;
      
    case 'dump':
      // Tilt bed animation
      if (mainLayer.ks && mainLayer.ks.r) {
        mainLayer.ks.r.a = 1; // Animated
        mainLayer.ks.r.k = [
          { t: 0, s: [0], e: [0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 45, s: [0], e: [10], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 90, s: [10], e: [10], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 135, s: [10], e: [0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [0] }
        ];
      }
      break;
      
    case 'rotate':
      // Slow rotation
      if (mainLayer.ks && mainLayer.ks.r) {
        mainLayer.ks.r.a = 1; // Animated
        mainLayer.ks.r.k = [
          { t: 0, s: [0], e: [360], i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } },
          { t: 180, s: [360] }
        ];
      }
      break;
      
    case 'lift':
      // Fork lifting animation
      if (mainLayer.ks && mainLayer.ks.p) {
        mainLayer.ks.p.a = 1; // Animated
        mainLayer.ks.p.k = [
          { t: 0, s: [150, 160, 0], e: [150, 140, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 90, s: [150, 140, 0], e: [150, 160, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [150, 160, 0] }
        ];
      }
      break;
      
    case 'drive':
      // Smooth forward movement with wheel rotation
      if (mainLayer.ks && mainLayer.ks.p) {
        mainLayer.ks.p.a = 1; // Animated
        mainLayer.ks.p.k = [
          { t: 0, s: [120, 150, 0], e: [180, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 90, s: [180, 150, 0], e: [120, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
          { t: 180, s: [120, 150, 0] }
        ];
      }
      break;
      
    case 'cruise':
      // Gentle floating with slight tilt
      if (mainLayer.ks) {
        // Position animation (floating)
        if (mainLayer.ks.p) {
          mainLayer.ks.p.a = 1; // Animated
          mainLayer.ks.p.k = [
            { t: 0, s: [150, 150, 0], e: [150, 145, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 90, s: [150, 145, 0], e: [150, 150, 0], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 180, s: [150, 150, 0] }
          ];
        }
        
        // Rotation animation (slight tilt)
        if (mainLayer.ks.r) {
          mainLayer.ks.r.a = 1; // Animated
          mainLayer.ks.r.k = [
            { t: 0, s: [0], e: [2], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 90, s: [2], e: [-2], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 180, s: [0] }
          ];
        }
      }
      break;
      
    case 'glide':
      // Smooth movement with subtle shine effects
      if (mainLayer.ks) {
        // Position animation (gliding)
        if (mainLayer.ks.p) {
          mainLayer.ks.p.a = 1; // Animated
          mainLayer.ks.p.k = [
            { t: 0, s: [140, 150, 0], e: [160, 150, 0], i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } },
            { t: 90, s: [160, 150, 0], e: [140, 150, 0], i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } },
            { t: 180, s: [140, 150, 0] }
          ];
        }
        
        // Scale animation (subtle pulse)
        if (mainLayer.ks.s) {
          mainLayer.ks.s.a = 1; // Animated
          mainLayer.ks.s.k = [
            { t: 0, s: [100, 100, 100], e: [102, 102, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 90, s: [102, 102, 100], e: [100, 100, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
            { t: 180, s: [100, 100, 100] }
          ];
        }
      }
      break;
  }
  
  return animationCopy;
}

// Process all animation files
const animationsDir = path.join(__dirname, 'src', 'assets', 'animations');
fs.readdir(animationsDir, (err, files) => {
  if (err) {
    console.error('Error reading animations directory:', err);
    return;
  }
  
  files.forEach(file => {
    if (file.endsWith('.json') && ANIMATION_STYLES[file]) {
      const filePath = path.join(animationsDir, file);
      
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }
        
        try {
          const animation = JSON.parse(data);
          const style = ANIMATION_STYLES[file].animationStyle;
          const colors = {
            primaryColor: ANIMATION_STYLES[file].primaryColor,
            secondaryColor: ANIMATION_STYLES[file].secondaryColor,
            accentColor: ANIMATION_STYLES[file].accentColor
          };
          
          // Update colors
          let updatedAnimation = updateColors(animation, colors);
          
          // Add unique animation
          updatedAnimation = addUniqueAnimation(updatedAnimation, style);
          
          // Write back to file
          fs.writeFile(filePath, JSON.stringify(updatedAnimation), 'utf8', err => {
            if (err) {
              console.error(`Error writing file ${file}:`, err);
              return;
            }
            console.log(`Updated ${file} with brand colors and unique animation`);
          });
        } catch (e) {
          console.error(`Error processing file ${file}:`, e);
        }
      });
    }
  });
});
