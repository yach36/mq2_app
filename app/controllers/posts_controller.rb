class PostsController < ApplicationController
  # spotifyAPIの認証
  RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
  
  def index
    @templateNum = 1
    respond_to do |format|
      format.html { render "posts/index" }
      format.js
    end
  end
  
  def new
    # アーティスト名で曲を検索(rspotify)
    search = params[:search]
    if search.present?
      # 検索文字列にヒットする曲一覧
      @tracks = RSpotify::Track.search(search)
      respond_to do |format|
        format.json { render json: @tracks }
      end
    end
    respond_to do |format|
      format.html { render "posts/new" }
      format.js
    end
  end
  
end
