module.exports = async helper => {
  try {
    const baseUrl = 'https://twilioquest-prod.firebaseapp.com';
    const response = await fetch(`${baseUrl}/quest/tracking/trees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        analyticsId: helper.analyticsId,
        createdAt: new Date(),
        missionName: 'owl',
        objectiveName: 'owl_plant_tree1',
        playerName: helper.context.settings.name,
      })
    });

    if (response.ok) {
      // 204 indicates success
      helper.success(helper.world.getTranslatedString('fog_owl.validator.thanks'));
    } else {
      if (response.status === 403) {
        return helper.success(helper.world.getTranslatedString('fog_owl.validator.already_planted'));
      } else {
        return helper.fail(helper.world.getTranslatedString('fog_owl.validator.submitting_error'));
      }
    }
  } catch (err) {
    console.log(err);
    helper.fail(
      `${helper.world.getTranslatedString('fog_owl.validator.submitting_error')}
      <br/></br/>
      ${err}`
    );
  }
};
