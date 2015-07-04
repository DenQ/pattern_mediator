// Generated by CoffeeScript 1.9.3
(function() {
  var IMediator, IMember, Mediator, MemberA, MemberB, MemberC, mediator, memberA, memberB, memberC,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  IMediator = (function() {
    function IMediator() {}

    IMediator.prototype.add = function(mediator) {
      throw false;
    };

    IMediator.prototype.send = function(sender, msg) {
      throw false;
    };

    return IMediator;

  })();

  IMember = (function() {
    function IMember() {}

    IMember.prototype.setMediator = function(mediator) {
      throw false;
    };

    IMember.prototype.notify = function(sender, msg) {
      throw false;
    };

    return IMember;

  })();

  Mediator = (function(superClass) {
    extend(Mediator, superClass);

    function Mediator() {
      return Mediator.__super__.constructor.apply(this, arguments);
    }

    Mediator.prototype.__members = [];

    Mediator.prototype.add = function(member) {
      this.__members.push(member);
      member.setMediator(this);
    };

    Mediator.prototype.send = function(sender, msg) {
      var i, len, member, ref;
      ref = this.__members;
      for (i = 0, len = ref.length; i < len; i++) {
        member = ref[i];
        member.notify(sender, msg);
      }
    };

    return Mediator;

  })(IMediator);

  MemberA = (function(superClass) {
    extend(MemberA, superClass);

    function MemberA() {
      return MemberA.__super__.constructor.apply(this, arguments);
    }

    MemberA.prototype.__mediator = null;

    MemberA.prototype.setMediator = function(mediator) {
      this.__mediator = mediator;
    };

    MemberA.prototype.notify = function(sender, msg) {
      return console.log(sender, msg);
    };

    return MemberA;

  })(IMember);

  MemberB = (function(superClass) {
    extend(MemberB, superClass);

    function MemberB() {
      return MemberB.__super__.constructor.apply(this, arguments);
    }

    MemberB.prototype.__mediator = null;

    MemberB.prototype.setMediator = function(mediator) {
      this.__mediator = mediator;
    };

    MemberB.prototype.notify = function(sender, msg) {
      return console.log(sender, msg);
    };

    return MemberB;

  })(IMember);

  MemberC = (function(superClass) {
    extend(MemberC, superClass);

    function MemberC() {
      return MemberC.__super__.constructor.apply(this, arguments);
    }

    MemberC.prototype.__mediator = null;

    MemberC.prototype.setMediator = function(mediator) {
      this.__mediator = mediator;
    };

    MemberC.prototype.notify = function(sender, msg) {
      return console.log(sender, msg);
    };

    return MemberC;

  })(IMember);


  /*
    context
   */

  memberA = new MemberA();

  memberB = new MemberB();

  memberC = new MemberC();

  mediator = new Mediator();

}).call(this);
