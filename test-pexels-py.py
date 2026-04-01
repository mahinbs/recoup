import urllib.request

ids = [5938363, 3822622, 4498471, 8337562, 5452202, 3769138, 6858177]

for i in ids:
    url = f"https://images.pexels.com/photos/{i}/pexels-photo-{i}.jpeg?w=10"
    req = urllib.request.Request(url, method="HEAD", headers={'User-Agent': 'Mozilla/5.0'})
    try:
        urllib.request.urlopen(req)
        print(f"{i} OK")
    except Exception as e:
        print(f"{i} FAILED: {e}")
