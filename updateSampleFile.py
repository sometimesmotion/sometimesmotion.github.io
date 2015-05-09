def updateSettignsFile():
 
  with open('/sample.json', 'r+') as settingsData:
    
    settings = json.load(settingsData)
    settings['car']['model'] = 'A8' #update the make of the first car
    
    settingsData.seek(0)  # rewind to beginning of file
    settingsData.write(json.dumps(settings,indent=2,sort_keys=True)) #write the updated version 
    settingsData.truncate() #truncate the remainder of the data in the file
 
    print 'Sample File Successfully Updated!'
