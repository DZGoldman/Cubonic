class PuzzlesController < ApplicationController
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
    redirect_to puzzle_path(@puzzle)
  end

  def win


      @puzzle= Puzzle.find(params[:id])

      @win= Win.new
      @win.user_id=current_user.id
      @win.puzzle_id=@puzzle.id
      @win.save
      redirect_to user_path(current_user)
  end

  def destroy
    @puzzle=Puzzle.find(params[:id])
    @puzzle.delete
    flash.now[:notice] = "puzzle deleted"

    redirect_to puzzles_path
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:notes, :pattern, :clicks_created)
  end
end
