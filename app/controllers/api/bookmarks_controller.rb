class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(biz_id: params[:biz_id])
    @bookmark.user_id = current_user.id
    @biz = Biz.find_by(id: params[:biz_id])
    debugger
    if @bookmark.save
      render 'api/biz/show', status: 200
    else
      render json: @bookmark.errors.full_messages
    end
  end

  def destroy
    @bookmark = Bookmark.where(biz_id: params[:biz_id], user_id: current_user.id)[0]
    @biz = Biz.find_by(id: params[:biz_id])
    if @bookmark
      @bookmark.destroy
      render 'api/biz/show', status: 200
    else
      render json: ['cannot find bookmark'], status: 422
    end
  end

end
