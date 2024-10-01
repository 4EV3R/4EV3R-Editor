local isMenuOpen = false

RegisterCommand('editormenu', function()
    if not isMenuOpen then
        SetNuiFocus(true, true)
        SendNUIMessage({
            action = 'open'
        })
        isMenuOpen = true
    end
end, false)

RegisterNUICallback('closeMenu', function()
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = 'close'
    })
    isMenuOpen = false
end)

RegisterNUICallback('startRecording', function()
    StartRecording(1)
end)

RegisterNUICallback('stopRecording', function()
    StopRecordingAndDiscardClip()
end)

RegisterNUICallback('stopAndSaveRecording', function()
    StopRecordingAndSaveClip()
end)
