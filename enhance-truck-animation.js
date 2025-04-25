import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Brand colors from color-codes.md
const BRAND_COLORS = {
  byzantineBlue: [0.243, 0.353, 0.757, 1], // #3E5AC1
  violetBlue: [0.094, 0.267, 0.776, 1], // #1844C6
  safetyOrange: [0.906, 0.49, 0.18, 1], // #E77D2E
  pumpkin: [0.969, 0.424, 0.035, 1], // #F76C09
  ivory: [0.969, 0.969, 0.918, 1], // #F7F7EA
  white: [0.996, 0.996, 0.996, 1], // #FEFEFE
  black: [0.1, 0.1, 0.1, 1]
};

// Path to the truck animation file
const truckAnimationPath = path.join(__dirname, 'src', 'assets', 'animations', 'truck-animation.json');

// Read the truck animation file
fs.readFile(truckAnimationPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading truck animation file:', err);
    return;
  }

  try {
    // Parse the animation JSON
    const animation = JSON.parse(data);

    // Enhance the animation
    enhanceTruckAnimation(animation);

    // Write the enhanced animation back to the file
    fs.writeFile(truckAnimationPath, JSON.stringify(animation), 'utf8', err => {
      if (err) {
        console.error('Error writing enhanced truck animation:', err);
        return;
      }
      console.log('Successfully enhanced truck animation with improved quality and fluid movement');
    });
  } catch (e) {
    console.error('Error processing truck animation:', e);
  }
});

// Function to enhance the truck animation
function enhanceTruckAnimation(animation) {
  // 1. Increase frame rate for smoother animation
  animation.fr = 60;

  // 2. Set animation duration for perfect looping
  animation.op = 120;

  // 3. Enhance truck components with better colors and details
  if (animation.layers && animation.layers.length > 0) {
    const truckLayer = animation.layers[0];

    // 4. Create perfect looping truck movement animation
    if (truckLayer.ks && truckLayer.ks.p) {
      // Smooth looping movement with identical start and end states
      truckLayer.ks.p.k = [
        { t: 0, s: [150, 150, 0], e: [170, 148, 0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 30, s: [170, 148, 0], e: [180, 150, 0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 60, s: [180, 150, 0], e: [170, 152, 0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 90, s: [170, 152, 0], e: [150, 150, 0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 120, s: [150, 150, 0] }
      ];
    }

    // 5. Add subtle bounce to truck rotation with perfect loop
    if (truckLayer.ks && truckLayer.ks.r) {
      truckLayer.ks.r.k = [
        { t: 0, s: [0], e: [1.5], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 30, s: [1.5], e: [0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 60, s: [0], e: [-1.5], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 90, s: [-1.5], e: [0], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
        { t: 120, s: [0] }
      ];
    }

    // 6. Update truck shapes with brand colors
    if (truckLayer.shapes && truckLayer.shapes.length > 0) {
      truckLayer.shapes.forEach(shape => {
        if (shape.it) {
          shape.it.forEach(item => {
            // Update fill colors based on shape name
            if (item.ty === 'fl' && item.c && item.c.k) {
              const shapeName = shape.nm ? shape.nm.toLowerCase() : '';
              
              if (shapeName === 'base' || shapeName === 'trailer') {
                // Main truck body/trailer - Byzantine Blue
                item.c.k = BRAND_COLORS.byzantineBlue;
              } else if (shapeName === 'cabin') {
                // Truck cabin - Violet Blue
                item.c.k = BRAND_COLORS.violetBlue;
              } else if (shapeName.includes('window') || shapeName.includes('glass')) {
                // Windows - Light color
                item.c.k = BRAND_COLORS.ivory;
              } else if (shapeName.includes('light') || shapeName.includes('headlight')) {
                // Lights - White
                item.c.k = BRAND_COLORS.white;
              } else if (shapeName.includes('wheel') || shapeName.includes('tire')) {
                // Wheels - Black
                item.c.k = BRAND_COLORS.black;
              } else if (shapeName.includes('detail') || shapeName.includes('accent')) {
                // Accent details - Safety Orange
                item.c.k = BRAND_COLORS.safetyOrange;
              }
            }
          });
        }
      });
    }

    // 7. Add wheel rotation animation
    truckLayer.shapes.forEach(shape => {
      if (shape.nm && (shape.nm.includes('Wheel') || shape.nm.includes('wheel'))) {
        if (shape.it && shape.it.length > 0) {
          // Find the transform property
          const transform = shape.it.find(item => item.nm === 'Transform');
          if (transform && transform.r) {
            // Add continuous rotation to wheels with perfect loop
            transform.r.a = 1; // Animated
            transform.r.k = [
              { t: 0, s: [0], e: [360], i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } },
              { t: 120, s: [360] }
            ];
          }
        }
      }
    });
  }

  // 8. Add subtle shadow for depth
  addShadowEffect(animation);

  return animation;
}

// Function to add shadow effect to the truck
function addShadowEffect(animation) {
  if (animation.layers && animation.layers.length > 0) {
    const truckLayer = animation.layers[0];
    
    // Add shadow shape if it doesn't exist
    let hasShadow = false;
    
    if (truckLayer.shapes) {
      hasShadow = truckLayer.shapes.some(shape => shape.nm === 'Shadow');
    } else {
      truckLayer.shapes = [];
    }
    
    if (!hasShadow) {
      // Create a shadow shape
      const shadowShape = {
        ty: 'gr',
        it: [
          {
            ty: 'el',
            p: { a: 0, k: [0, 60], ix: 3 },
            s: { a: 0, k: [120, 20], ix: 2 },
            nm: 'Ellipse Path 1',
            mn: 'ADBE Vector Shape - Ellipse',
            hd: false
          },
          {
            ty: 'fl',
            c: { a: 0, k: [0, 0, 0, 0.2], ix: 4 },
            o: { a: 0, k: 70, ix: 5 },
            r: 1,
            bm: 0,
            nm: 'Fill 1',
            mn: 'ADBE Vector Graphic - Fill',
            hd: false
          },
          {
            ty: 'tr',
            p: { a: 1, k: [
              { t: 0, s: [0, 60], e: [0, 62], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
              { t: 60, s: [0, 62], e: [0, 60], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
              { t: 120, s: [0, 60] }
            ], ix: 2 },
            a: { a: 0, k: [0, 0], ix: 1 },
            s: { a: 1, k: [
              { t: 0, s: [100, 100], e: [110, 90], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
              { t: 60, s: [110, 90], e: [100, 100], i: { x: [0.42], y: [0.98] }, o: { x: [0.58], y: [0.02] } },
              { t: 120, s: [100, 100] }
            ], ix: 3 },
            r: { a: 0, k: 0, ix: 6 },
            o: { a: 0, k: 100, ix: 7 },
            sk: { a: 0, k: 0, ix: 4 },
            sa: { a: 0, k: 0, ix: 5 },
            nm: 'Transform'
          }
        ],
        nm: 'Shadow',
        np: 3,
        cix: 2,
        bm: 0,
        ix: truckLayer.shapes.length + 1,
        mn: 'ADBE Vector Group',
        hd: false
      };
      
      // Add shadow as the first shape (so it appears behind the truck)
      truckLayer.shapes.unshift(shadowShape);
    }
  }
}
