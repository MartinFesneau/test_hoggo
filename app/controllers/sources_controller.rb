class SourcesController < ApplicationController
  before_action :set_source, only: [:show, :destroy]
  def new
    @source = Source.new
  end

  def create
    @source = Source.new(source_params)
    @source.subject = Subject.find(params[:subject_id])
    if @source.save
      respond_to do |format|
        format.html { redirect_to subject_path(@source.subject_id) }
        format.js
      end
    else
      respond_to do |format|
        format.html { render :new }
        format.js
      end
    end
  end

  def show
  end

  def destroy
    @source.destroy
    redirect_to subject_path(@source.subject)
  end

private

  def source_params
    params.require(:source).permit(:id, :name, :content, :subject_id)
  end

  def set_source
    @source = Source.find(params[:id])
  end
end
