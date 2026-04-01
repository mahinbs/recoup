import urllib.request
import re
import json

conditions = [
    ("coverRasap", "addiction counseling therapy site:pexels.com"), 
    ("coverBioenergeticsProgram", "healthy athlete energy site:pexels.com"), 
    ("coverCancerRehabilitation", "hospital patient care site:pexels.com"), 
    ("coverDiabetesProgram", "blood sugar diabetes care site:pexels.com"), 
    ("coverGastrointestinalProgram", "healthy eating digestion site:pexels.com"), 
    ("coverGeriatricsProgram", "happy elderly care site:pexels.com"), 
    ("coverHormonalRebalanceProgram", "womens wellness peaceful site:pexels.com"), 
    ("coverOsteoporosisRehabilitation", "bone health physical therapy site:pexels.com"), 
    ("coverParkinsonsDisease", "elderly hand care site:pexels.com"), 
    ("coverRespiratoryHealth", "deep breath outdoors site:pexels.com"), 
    ("coverRheumatologicalRehabilitation", "physical therapy joint massage site:pexels.com"), 
    ("coverSchoolHealth", "school children clinic site:pexels.com"), 
    ("coverSleepCircadianRhythmClinic", "peaceful sleep bedroom site:pexels.com"), 
    ("coverSpinalDeformityRehabilitation", "spine posture care site:pexels.com"), 
    ("coverTravelMedicineClinic", "travel health passport site:pexels.com")
]

def search_bing(query):
    url = "https://www.bing.com/images/search?q=" + urllib.parse.quote(query + ' photos')
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        matches = re.findall(r'murl&quot;:&quot;(.*?)&quot;', html)
        for m in matches:
            if 'pexels' in m and ('jpg' in m or 'jpeg' in m):
                return m
        return None
    except Exception as e:
        return None

results = {}
for name, q in conditions:
    res = search_bing(q)
    results[name] = res
    print(f"{name} -> {res}")

with open('fix-urls.json', 'w') as f:
    json.dump(results, f, indent=2)
print("DONE")
