class Mediator extends IMediator
  __members: []

  add:(mediator)->
    @__members.push mediator
    return


  send:(sender, msg)->
    for member in @__members
      member.notify sender, msg
    return