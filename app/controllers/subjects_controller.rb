class SubjectsController < ApplicationController
  before_action :set_subject, only: [:show, :destroy]

  def index
    @subjects = Subject.all
  end

  def show
  end

  def create
    @subject = Subject.new(subject_params)
    if @subject.save
      redirect_to subjects_path
    else
      respond_to do |format|
      format.json { render json: @subject.errors, status: :unprocessable_entity }
      format.js
      end
    end
  end
  
  def destroy
    @subject.destroy
    redirect_to subjects_path
  end
  
  private
  
  def subject_params
    params.require(:subject).permit(:id, :name)
  end

  def set_subject
    @subject = Subject.find(params[:id])
  end
end