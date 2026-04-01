const https = require('https');
const fs = require('fs');

const conditions = [
  "Alcohol and Substance Abuse Therapy", "Alzheimers Cognitive Decline Elderly", "Autism Spectrum Therapy",
  "Bioenergetics vitality", "Cancer Rehabilitation Medical", "Cardiometabolic Heart Health",
  "Chronic Inflammation Wellness", "Chronic Pain Physical Therapy", "Diabetes Blood Sugar",
  "Gastrointestinal Gut Health", "Geriatrics Happy Seniors", "Hormonal Rebalance Wellness",
  "Hypermobility Flexibility", "Immune Health Citrus", "Infertility Hopeful Parents",
  "Longevity Active Senior", "Mental Health Calm", "Mold Toxicity Clean Air",
  "Multiple Sclerosis Wheelchair", "Oral Health Dentist", "Osteoporosis Bone Health",
  "Parkinsons Hand Tremor Care", "Primary Care Doctor", "Respiratory Health Breathing",
  "Rheumatological Joint Massage", "School Health Children", "Sleep Circadian Bed",
  "Smoking Cessation Fresh", "Spinal Deformity Posture", "Stress Positive Relationships",
  "Stroke Recovery Walking", "Traumatic Brain Injury Care", "Travel Medicine Passport",
  "Weight Management Scale"
];

function fetchImages() {
  const results = {};
  let completed = 0;

  conditions.forEach((query, index) => {
    // using a public API that aggregates free images based on keyword
    // Since direct scraping is hard without headless browser, we can use a known free endpoint or just simulate.
    const url = `https://loremflickr.com/json/g/1200/800/${encodeURIComponent(query)}/all`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          results[query] = json.file || \`https://loremflickr.com/1200/800/\${encodeURIComponent(query)}?lock=\${index}\`;
        } catch(e) {
          results[query] = \`https://loremflickr.com/1200/800/\${encodeURIComponent(query.split(' ')[0])}?lock=\${index}\`;
        }
        completed++;
        if (completed === conditions.length) {
          fs.writeFileSync('image-urls.json', JSON.stringify(results, null, 2));
          console.log('DONE');
        }
      });
    }).on('error', () => {
      results[query] = \`https://loremflickr.com/1200/800/\${encodeURIComponent(query.split(' ')[0])}?lock=\${index}\`;
      completed++;
      if (completed === conditions.length) {
        fs.writeFileSync('image-urls.json', JSON.stringify(results, null, 2));
        console.log('DONE');
      }
    });
  });
}

fetchImages();
