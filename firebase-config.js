// ============================================================
//  FIREBASE CONFIG — fill this in after creating your project
//  Full setup guide: see README or ask Claude
// ============================================================
//
//  HOW TO GET THESE VALUES:
//  1. Go to https://console.firebase.google.com
//  2. Click "Add project" → name it (e.g. "chores-7286") → Continue
//  3. Disable Google Analytics → Create project → Continue
//  4. Click the </> (Web) icon to add a web app
//  5. Give it a nickname (e.g. "chore-board") → Register app
//  6. Copy the firebaseConfig object values below
//  7. Go to Build → Realtime Database → Create database
//     → Start in TEST MODE → Enable
//  8. Done! Paste the values in below.
// ============================================================

const firebaseConfig = {
  apiKey:            "AIzaSyAls8KIoZvo52Mlwy4SKRzhYFUnh1T0tLQ",
  authDomain:        "chores-7286.firebaseapp.com",
  databaseURL:       "https://chores-7286-default-rtdb.firebaseio.com",
  projectId:         "chores-7286",
  storageBucket:     "chores-7286.firebasestorage.app",
  messagingSenderId: "278054493715",
  appId:             "1:278054493715:web:e12a70d53a24b60f7f29e6"
};

// ============================================================
//  ADMIN PASSWORD — change this to something only you know
// ============================================================
const ADMIN_PASSWORD = "retxed6827";

// ============================================================
//  Initialize Firebase
// ============================================================
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ============================================================
//  Seed initial data (runs once if database is empty)
// ============================================================
db.ref('config').once('value', snap => {
  if (!snap.exists()) {
    db.ref('config').set({
      tokenName: 'Token',
      conversionRate: 4
    });
  }
});

db.ref('users').once('value', snap => {
  if (!snap.exists()) {
    db.ref('users').set({
      aria:   { name: 'Aria',   color: '#FF4E6A', confirmedTokens: 0 },
      koen:   { name: 'Koen',   color: '#4ECAFF', confirmedTokens: 0 },
      ozie:   { name: 'Ozie',   color: '#FF9A3C', confirmedTokens: 0 },
      logan:  { name: 'Logan',  color: '#A855F7', confirmedTokens: 0 },
      luke:   { name: 'Luke',   color: '#22C55E', confirmedTokens: 0 },
      deibro: { name: 'Deibro', color: '#F59E0B', confirmedTokens: 0 }
    });
  }
});
