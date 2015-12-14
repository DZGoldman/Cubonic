class SessionsController < ApplicationController
  def index

  end

  def new
  end

  def create
    user = User.find_by(user_name: params[:session][:user_name])
    if user && user.authenticate(params[:session][:password])
      log_in user
      flash[:notice] = "Logged in. Right on."
      redirect_to root_path

    else
      flash.now[:danger] = "Invalid email/password combination. Try again?"
      render 'new'
    end
  end

  def destroy
    log_out
        flash[:notice] = "Logged out. Sweet."
    redirect_to root_path
  end
end
