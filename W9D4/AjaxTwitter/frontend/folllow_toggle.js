const APIUtil = require('./api_util.js');


class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state') ;
    this.render();
    this.handleclick();
  }
  // getUsermethod
  render(){
      console.log(this.followState);
      if(this.followState === "unfollow"){
        this.$el.html("Follow");
        
      } else if(this.followState === "follow"){
        this.$el.html("Unfollow");
      }
      else if(this.followState === 'following'){
        this.$el.html("Following");
      }
      else if(this.followState === 'unfollowing'){
        this.$el.html("Unfollowing");
      }
  }

  //settimeOut(func1 = settimeout(func2, 3s), 5s)
  handleclick () {
    const successfulFollow = () => {
      this.followState = 'following';
      this.render();
      setTimeout(() => {
        //the follow method
        this.followState = "follow";
        this.render();
      }, 2000);
    };

    const successfulUnFollow = () => {
      this.followState = 'unfollowing';
      this.render();
      setTimeout(() => {
        //the follow method
        this.followState = "unfollow";
        this.render();
      }, 2000);

    };

    this.$el.on('click', (event) => {
      // debugger;
      if (this.followState === 'follow') {
        event.preventDefault();
        APIUtil.unfollowUser(this.userId).then(successfulUnFollow);
      }
      else if(this.followState === 'unfollow'){
        event.preventDefault();
        APIUtil.followUser(this.userId).then(successfulFollow);
      }
    });
  }
}

module.exports = FollowToggle;