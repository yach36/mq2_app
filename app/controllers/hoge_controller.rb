class HogeController < ApplicationController
  def index
    @templateNum = 2
    respond_to do |format|
      format.html { render "_index" }
      format.js
    end
  end
end
