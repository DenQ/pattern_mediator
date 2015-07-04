class Mediator extends IMediator
  __members: []

  add:(member)->
    @__members.push member
    member.setMediator @
    return


  send:(sender, msg)->
    for member in @__members
      member.notify sender, msg
    return