class PuzzlesController < ApplicationController

  def levels
      @puzzles= User.find_by(user_name:"DZack").puzzles
      # instead of all puzzles, only puzzles by DZack (admin)

      # or search through puzzles, find all where user id is DZack's id
  end
  def index
    @puzzles= Puzzle.all
  end

  def show
      @puzzle= Puzzle.find(params[:id])
  end

  def edit
    @puzzle=Puzzle.find(params[:id])
  end

  def update
    @puzzle= Puzzle.find(params[:id])
    @puzzle.update(puzzle_params)
    @puzzle.user_id=current_user.id
        flash[:notice] = "You've updated this puzzle. Cool"
    redirect_to puzzle_path(@puzzle)


  end

  def new
    @puzzle=Puzzle.new
  end

  def create
    @puzzle= Puzzle.new puzzle_params

    @puzzle.user_id = current_user.id
    #@puzzle.clicks_created= 3
    @puzzle.save
    flash[:notice] = "New Puzzle Created. Olay Olay. "
    redirect_to puzzle_path(@puzzle)
  end

  def win
    # From a custom path: generates new Win object, gives it appropriate puzzle and user id
      @puzzle= Puzzle.find(params[:id])
      @win= Win.new
      @win.user_id=current_user.id
      @win.puzzle_id=@puzzle.id
      #@win.clicks?
      @win.save

      # @puzzle.best_solution < @win.clicks
      #check to see if the clicks it took to win is the best solution; if so, update best solution
      # @puzzle.best_solution=@win.clicks
      if @puzzle.best_solver
        @puzzle.best_solver=current_user.user_name
        @puzzle.save
      end
      redirect_to user_path(current_user)
  end

  def destroy
    @puzzle=Puzzle.find(params[:id])
     @win=Win.where(puzzle_id: @puzzle.id)
     unless @win==[]
       @win.each do |win|
         Win.delete(win.id)
       end
     end
    @puzzle.delete
    flash.now[:success] = "puzzle deleted"

    redirect_to puzzles_path
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:notes, :pattern, :clicks_created)
  end
end
