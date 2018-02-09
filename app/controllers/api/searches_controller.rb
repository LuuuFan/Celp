class Api::SearchesController < ApplicationController

  def index
    if params[:key] && params[:key].length > 0
      if Tag.all.pluck(:tag_name).include?(params[:key].capitalize)
          if params[:loc] && params[:loc].length > 0
            @bizes = Biz.joins(:tags).where(tags: {tag_name: params[:key].capitalize}, city: params[:loc].split(' ').map{|el| el.capitalize}.join(' ')).includes(:reviews, :reviewed_users).limit(15)
          else
            @bizes = Biz.joins(:tags).where(tags: {tag_name: params[:key].capitalize}).includes(:reviews, :reviewed_users).limit(15)
          end
      else
        name = "%#{params[:key]}%"
        if params[:loc].length > 0
          result = Biz.where('UPPER(name) LIKE UPPER(?)', name)
          @bizes = result.where(city: params[:loc].split(' ').map{|el| el.capitalize}).limit(15)
        else
          @bizes = Biz.where('UPPER(name) LIKE UPPER(?)', name).limit(15)
        end
        # name = "%#{params[:key].split("").join('%')}%"
        # if params[:loc].length > 0
        #   @bizes.concat(Biz.where(city: params[:loc]).where('UPPER(name) LIKE UPPER(?)', name))
        # else
        #   @bizes.concat(Biz.where('UPPER(name) LIKE UPPER(?)', name))
        # end
      end
    elsif params[:loc]
      if params[:loc].length > 0
        @bizes = Biz.where(city: params[:loc].split(' ').map{|el| el.capitalize}.join(' ')).includes(:reviews, :reviewed_users).limit(15)
      end
    elsif params[:cat]
      if params[:num].to_i > 0
        @bizes = Biz.joins(:categories).where(categories: {category: params[:cat].capitalize}, city: 'San Francisco').sample(params[:num].to_i)
      else
        @bizes = Biz.joins(:categories).where(categories: {category: params[:cat].capitalize}).includes(:reviews, :reviewed_users).sample(15)
      end
    else
      @bizes = {}
    end
    render 'api/biz/index', status: 200
  end

end
