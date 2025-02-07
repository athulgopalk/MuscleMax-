import p1_img from "./wheyprotein-1.jpg";
import p2_img from "./massgainer-1.jpg";
import p3_img from "./multivitamin-1.jpg";
import p4_img from "./beginnerswhey-1.jpg";
import p5_img from "./fishoil-1.jpg";
import p6_img from "./bcaa-1.jpg";
import p7_img from "./preworkout-1.jpg";
import p8_img from "./creatine-1.jpg";
import p9_img from "./whey-protein.jpg";
import p10_img from "./bcaa.jpg";
import p11_img from "./preworkout.jpg";
import p12_img from "./creatine.jpg";
import p13_img from "./gym-golve.jpg";
import p14_img from "./resistance-band.jpg";
import p15_img from "./shaker-bottle.jpg";
import p16_img from "./knee-sleeves.jpg";
import p17_img from "./lifting-belt.jpg";
import p18_img from "./foam-roller.jpg";
import p19_img from "./handgripper.jpg";
import p20_img from "./yoga-mat.jpg";
import p21_img from "./yoga-bar-chooalmond.jpg";
import p22_img from "./proteinbar-peanutbutt.jpg";
import p23_img from "./proteinbar-berryblast.jpg";
import p24_img from "./proteinbar-vanilla-caremel.jpg";
import p25_img from "./peanut-butter-crun.jpg";
import p26_img from "./peanut-butter.jpg";
import p27_img from "./baked-oats.jpg";
import p28_img from "./energy-bar-hazel.jpg";
import p29_img from "./energy-bar-nut.jpg";
import p30_img from "./meuseli-cholate.jpg";


let all_product = [
  {
    id: 1,
    name: "Whey Protein with Digestive Enzymes ",
    category: "supplements",
    image: p1_img,
    new_price: 3499.0,
    old_price: 4499.0,
  },
  {
    id: 2,
    name: "High-Calorie Mass Gainer ",
    category: "supplements",
    image: p2_img,
    new_price: 2999.0,
    old_price: 3999.0,
  },
  {
    id: 3,
    name: "Advanced Multivitamin Complex ",
    category: "supplements",
    image: p3_img,
    new_price: 799.0,
    old_price: 999.0,
  },
  {
    id: 4,
    name: "Beginner's Whey Protein ",
    category: "supplements",
    image: p4_img,
    new_price: 1999.0,
    old_price: 2499.0,
  },
  {
    id: 5,
    name: "Fish Oil Omega-3 Capsules ",
    category: "supplements",
    image: p5_img,
    new_price: 999.0,
    old_price: 1299.0,
  },
  {
    id: 6,
    name: "BCAA Powder ",
    category: "supplements",
    image: p6_img,
    new_price: 2499.0,
    old_price: 2999.0,
  },
  {
    id: 7,
    name: "Pre-Workout Energy Booster ",
    category: "supplements",
    image: p7_img,
    new_price: 1999.0,
    old_price: 2499.0,
  },
  {
    id: 8,
    name: "Creatine Monohydrate ",
    category: "supplements",
    image: p8_img,
    new_price: 1499.0,
    old_price: 1999.0,
  },
  {
    id: 9,
    name: "Whey Protein Isolate ",
    category: "supplements",
    image: p9_img,
    new_price: 5299.0,
    old_price: 6399.0,
  },
  {
    id: 10,
    name: "BCAA Amino Acids ",
    category: "supplements",
    image: p10_img,
    new_price: 3000.0,
    old_price: 3500.0,
  },
  {
    id: 11,
    name: "Pre-Workout Energy Booster ",
    category: "supplements",
    image: p11_img,
    new_price: 2500.0,
    old_price: 3000.0,
  },
  {
    id: 12,
    name: "Creatine Monohydrate ",
    category: "supplements",
    image: p12_img,
    new_price: 5890.0,
    old_price: 7000.0,
  },

  // Additional products
  {
    id: 13,
    name: "Gym Gloves - Premium Quality",
    category: "accessories",
    image: p13_img,
    new_price: 799.0,
    old_price: 999.0,
  },
  {
    id: 14,
    name: "Resistance Bands - Set of 2",
    category: "accessories",
    image: p14_img,
    new_price: 599.0,
    old_price: 699.0,
  },
  {
    id: 15,
    name: "Shaker Bottle - 700ml",
    category: "accessories",
    image: p15_img,
    new_price: 499.0,
    old_price: 699.0,
  },
  {
    id: 16,
    name: "Knee Sleeves - Pair",
    category: "accessories",
    image: p16_img,
    new_price: 1599.0,
    old_price: 1999.0,
  },
  {
    id: 17,
    name: "Lifting Belt - Leather",
    category: "accessories",
    image: p17_img,
    new_price: 2499.0,
    old_price: 2999.0,
  },
  {
    id: 18,
    name: "Foam Roller - Muscle Recovery",
    category: "accessories",
    image: p18_img,
    new_price: 1299.0,
    old_price: 1599.0,
  },
  {
    id: 19,
    name: "Hand Gripper - Adjustable",
    category: "accessories",
    image: p19_img,
    new_price: 599.0,
    old_price: 799.0,
  },
  {
    id: 20,
    name: "Yoga Mat - Anti-Slip",
    category: "accessories",
    image: p20_img,
    new_price: 1499.0,
    old_price: 1799.0,
  },
  {
    id: 21,
    name: "Protein Bar - Chocolate Almond",
    category: "snacks",
    image: p21_img,
    new_price: 199.0,
    old_price: 249.0,
  },
  {
    id: 22,
    name: "Protein Bar - Peanut Butter",
    category: "snacks",
    image: p22_img,
    new_price: 199.0,
    old_price: 249.0,
  },
  {
    id: 23,
    name: "Protein Bar - Berry Blast",
    category: "snacks",
    image: p23_img,
    new_price: 199.0,
    old_price: 249.0,
  },
  {
    id: 24,
    name: "Protein Bar - Vanilla Caramel",
    category: "snacks",
    image: p24_img,
    new_price: 199.0,
    old_price: 249.0,
  },
  {
    id: 25,
    name: "Peanut Butter - Crunchy ",
    category: "snacks",
    image: p25_img,
    new_price: 499.0,
    old_price: 599.0,
  },
  {
    id: 26,
    name: "Peanut Butter - Smooth ",
    category: "snacks",
    image: p26_img,
    new_price: 499.0,
    old_price: 599.0,
  },
  {
    id: 27,
    name: "Baked Oats - Healthy Breakfast",
    category: "snacks",
    image: p27_img,
    new_price: 299.0,
    old_price: 399.0,
  },
  {
    id: 28,
    name: "Energy Bar - Nuts & Seeds",
    category: "snacks",
    image: p28_img,
    new_price: 150.0,
    old_price: 199.0,
  },
  {
    id: 29,
    name: "Energy Bar - Chocolate Hazelnut",
    category: "snacks",
    image: p29_img,
    new_price: 150.0,
    old_price: 199.0,
  },
  {
    id: 30,
    name: "Muesli - Chocolate ",
    category: "snacks",
    image: p30_img,
    new_price: 150.0,
    old_price: 199.0,
  },
];

export default all_product;
