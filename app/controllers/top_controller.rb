class TopController < ApplicationController
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
    
    # 表示するテンプレートを制御するための変数
    @templateNum = 1
  end
end
