class MemberC extends IMember

  __mediator: null


  setMediator:(mediator) ->
    @__mediator = mediator
    @__mediator.send @, 'add C'
    return


  notify:(sender, msg) ->
    console.log 'notify C', msg
    return