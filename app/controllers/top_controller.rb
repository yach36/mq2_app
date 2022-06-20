class TopController < ApplicationController
  def index
    
    # 表示するテンプレートを制御するための変数
    @templateNum = 1
    # 投稿を最新順に表示
    @posts = Post.all.order(created_at: "DESC")
  end
end
