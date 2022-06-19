class PostsController < ApplicationController
  
  def index
    @templateNum = 1
    # 投稿を最新順に
    @posts = Post.all.order(created_at: "DESC")
    respond_to do |format|
      format.html { render "posts/index" }
      format.js
    end
  end
  
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(post_params)
    @post.save!
    @posts = Post.all.order(created_at: "DESC")
  end
  
  def cancel
    
  end
  
  def select
    @track_id = params[:track_id]
    @track_image = params[:track_image]
    @track_name = params[:track_name]
    @track_artist = params[:track_artist]
    respond_to do |format|
      format.js
    end
  end
  
  private
  def post_params
    params.require(:post).permit(:txt, :track_id)
  end
end
