class HogeController < ApplicationController
  def index
    @templateNum = 2
    respond_to do |format|
      format.html { render "hoge/index" }
      format.js
    end
  end
end
