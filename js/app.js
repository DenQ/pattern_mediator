// Generated by CoffeeScript 1.9.3
(function() {
  var AbMember, IMediator, IMember, Mediator, MemberA, MemberB, MemberC, mediator, memberA, memberB, memberC,
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

  AbMember = (function(superClass) {
    extend(AbMember, superClass);

    function AbMember() {
      return AbMember.__super__.constructor.apply(this, arguments);
    }

    AbMember.prototype.__mediator = null;

    AbMember.prototype.__name = null;

    AbMember.prototype.setMediator = function(mediator) {
      this.__mediator = mediator;
      this.send("add " + this.__name);
    };

    AbMember.prototype.notify = function(sender, msg) {
      console.log("notify: " + sender.__name + " -> " + this.__name + ".", 'Msg: ' + msg);
    };

    AbMember.prototype.send = function(msg) {
      this.__mediator.send(this, msg);
    };

    return AbMember;

  })(IMember);

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

    MemberA.prototype.__name = 'MemberA';

    return MemberA;

  })(AbMember);

  MemberB = (function(superClass) {
    extend(MemberB, superClass);

    function MemberB() {
      return MemberB.__super__.constructor.apply(this, arguments);
    }

    MemberB.prototype.__mediator = null;

    MemberB.prototype.__name = 'MemberB';

    return MemberB;

  })(AbMember);

  MemberC = (function(superClass) {
    extend(MemberC, superClass);

    function MemberC() {
      return MemberC.__super__.constructor.apply(this, arguments);
    }

    MemberC.prototype.__mediator = null;

    MemberC.prototype.__name = 'MemberC';

    return MemberC;

  })(AbMember);


  /*
    context
   */

  memberA = new MemberA();

  memberB = new MemberB();

  memberC = new MemberC();

  mediator = new Mediator();

  mediator.add(memberA);

  mediator.add(memberB);

  mediator.add(memberC);

}).call(this);
