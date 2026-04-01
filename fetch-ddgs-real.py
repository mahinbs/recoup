import subprocess
import sys
import json

# install duckduckgo-search carefully
subprocess.check_call([sys.executable, "-m", "pip", "install", "duckduckgo-search", "--quiet"])

from duckduckgo_search import DDGS

conditions = [
    ("coverRasap", "addiction therapy counseling premium portrait stock photo"), 
    ("coverBioenergeticsProgram", "athlete energy stamina premium stock photo"), 
    ("coverCancerRehabilitation", "caring hospital patient premium stock photo"), 
    ("coverDiabetesProgram", "blood sugar test device medical premium stock photo"), 
    ("coverGastrointestinalProgram", "healthy food biome diet premium stock photo"), 
    ("coverGeriatricsProgram", "happy modern elderly care premium stock photo"), 
    ("coverHormonalRebalanceProgram", "womens wellness calm yoga premium stock photo"), 
    ("coverOsteoporosisRehabilitation", "bone health physical therapy premium stock photo"), 
    ("coverParkinsonsDisease", "elderly patient hand holding nurse premium stock photo"), 
    ("coverRespiratoryHealth", "breathing fresh air lungs premium stock photo"), 
    ("coverRheumatologicalRehabilitation", "joint pain physical therapy premium stock photo"), 
    ("coverSchoolHealth", "school children health modern premium stock photo"), 
    ("coverSleepCircadianRhythmClinic", "peaceful deep sleep dark bedroom premium stock photo"), 
    ("coverSpinalDeformityRehabilitation", "spine posture clinic premium stock photo"), 
    ("coverTravelMedicineClinic", "travel health passport medicine premium stock photo")
]

results = {}
ddgs = DDGS()

for name, q in conditions:
    try:
        # Get first image
        res = list(ddgs.images(q, max_results=1, type_image='photo'))
        if res and len(res) > 0:
            results[name] = res[0]['image']
        else:
            results[name] = ""
    except Exception as e:
        results[name] = ""
        print("Error on", name, str(e))

with open('ddgs-urls.json', 'w') as f:
    json.dump(results, f, indent=2)

print("SUCCESS")
