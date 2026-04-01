const https = require('https');
const ids = [7176026, 3768916, 2324837, 7583647, 1640777, 339620, 3822858, 4325439, 4426999, 3786157, 5452204, 8613051, 935777, 3942368, 3884813];

async function check() {
  for (let id of ids) {
     const url = \`https://images.pexels.com/photos/\${id}/pexels-photo-\${id}.jpeg\`;
     await new Promise(r => {
        https.request(url, {method: 'HEAD'}, res => {
           console.log(id, '->', res.statusCode);
           r();
        }).on('error', () => r()).end();
     });
  }
}
check();
