class PostsController < ApplicationController
  # spotifyAPIの認証
  RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
  def index
    @templateNum = 1
    # 投稿を最新順に
    @posts = Post.all.order(created_at: "DESC")
  end
  
  def new
    @post = Post.new
    # アーティスト名で曲を検索(rspotify)
    if params[:search].present?
      # 検索文字列にヒットする曲一覧
      @tracks = RSpotify::Track.search(params[:search])
      respond_to do |format|
        format.html { redirect_to :root }
        format.json { render json: @tracks }
      end
    end
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
    @search = params[:search]
    respond_to do |format|
      format.js
    end
  end
  
  def unselect
    @search = params[:search]
  end
  
  private
  def post_params
    params.require(:post).permit(:txt, :track_id)
  end
end
