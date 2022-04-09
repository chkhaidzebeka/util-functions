// 1. go to instagram profile and open network tab
// 2. filter to only XHR request
// 3. find /story and copy whole response


const instaAnonymousStoryViewer = storyOBj => 
  storyOBj.reel.items.map(el => (el.video_versions || el.image_versions2.candidates)[0].url)
