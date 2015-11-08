class UsersController < ApplicationController
  def index
  end

  def new
    @user=User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      flash[:alert] = "Sucess! Log in to start"
      redirect_to login_path
    else
      render new_user_path
    end
  end

  def show
    @user = User.find(params[:id])
    @wins=Win.all

  end

  private

  def user_params
    params.require(:user).permit(:user_name, :email, :password, :password_confirmation, :profile_pic)
  end


end
