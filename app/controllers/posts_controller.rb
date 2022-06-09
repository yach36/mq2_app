class PostsController < ApplicationController
  # spotifyAPIの認証
  RSpotify.authenticate(ENV["SPOTIFY_CLIENT_ID"], ENV["SPOTIFY_CLIENT_SECRET"])
  def index
    # アーティスト名で曲を検索(rspotify)
    if params[:search].present?
      # 検索文字列にヒットする曲一覧
      @tracks = RSpotify::Track.search(params[:search])
      respond_to do |format|
        format.html { redirect_to :root }
        format.json { render json: @tracks }
      end
    end
    
    # フッターのカーソルを制御
    # @cursorNum = params[:cursor]
    # if @cursorNum.present?
    #   respond_to do |format|
    #     format.html
    #     format.json { render json: @cursorNum }
    #   end
    # end
    @templateNum = 1
    respond_to do |format|
      format.html { render "posts/index" }
      format.js
    end
  end
  
  def new
    respond_to do |format|
      format.html { render "posts/new" }
      format.js
    end
  end
  
end
