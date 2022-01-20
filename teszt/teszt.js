const{test}=QUnit;
let tomb=[];
const ell=new TTTModel(tomb);
QUnit.module('vizszintes', function() {
    test('létezik-e', function(assert) {
        assert.ok(ell.getVEllenorzes,"vizSzintesletezik");
      });
      test('fugvény-e', function(assert) {
          assert.ok(typeof ell.getVEllenorzes=="function","vizSzintesletezik");
        });
        test('uresen', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getVEllenorzes(),"---|---|---|");
          });
          test('OOO|---|---|', function(assert) {
            let tomb=[
                {ertek:"O"},
                {ertek:"O"},
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getVEllenorzes(),"OOO|---|---|");
          });
          test('sortoressel van  meg a 3 om', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getVEllenorzes(),"--X|XX-|---|");
          });
          test('XOX', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"O"},
                {ertek:"X"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getVEllenorzes(),"---|---|XOX|");
          });
          test('XXX', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"X"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getVEllenorzes(),"---|---|XXX|");
          });
     

});

QUnit.module('fuggoletes', function() {

    test('létezik-e', function(assert) {
        assert.ok(ell.getFEllenorzes,"letezik");
      });
      test('fugvény-e', function(assert) {
          assert.ok(typeof ell.getFEllenorzes=="function","letezik");
        });
        test('uresen', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getFEllenorzes(),"---|---|---|");
          });
          test('O--|O--|O--|', function(assert) {
            let tomb=[
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getFEllenorzes(),"OOO|---|---|");
          });
          test('sortoressel van  meg a 3 om', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getFEllenorzes(),"-X-|-X-|X--|");
          });
          test('XOX', function(assert) {
            let tomb=[
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"O"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"-"},
                {ertek:"-"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getFEllenorzes(),"OOX|---|---|");
          });
          test('XXX', function(assert) {
            let tomb=[
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"-"},
                {ertek:"X"},
                {ertek:"X"},
                {ertek:"X"}];
                let tic=new TTTModel(tomb);
            assert.equal(tic.getFEllenorzes(),"--X|--X|--X|");
          });
});

QUnit.module('atló', function() {

    test('létezik-e', function(assert) {
        assert.ok(ell.atloEll,"letezik");
      });
      test('fugvény-e', function(assert) {
          assert.ok(typeof ell.atloEll=="function","letezik");
        });
 
    test('uresen', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"}];
            let tic=new TTTModel(tomb);
        assert.equal(tic.atloEll(),"---|---|");
      });
      test('sikeres', function(assert) {
        let tomb=[
            {ertek:"O"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"O"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"O"}];
            let tic=new TTTModel(tomb);
        assert.equal(tic.atloEll(),"OOO|-O-|");
      });
      test('sortoressel van  meg a 3 om', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"}];
            let tic=new TTTModel(tomb);
        assert.equal(tic.atloEll(),"-X-|XX-|");
      });
      test('XOX', function(assert) {
        let tomb=[
            {ertek:"O"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"O"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"-"},
            {ertek:"-"}];
            let tic=new TTTModel(tomb);
        assert.equal(tic.atloEll(),"O--|--X|");
      });
      test('XXX', function(assert) {
        let tomb=[
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"-"},
            {ertek:"X"},
            {ertek:"X"},
            {ertek:"X"}];
            let tic=new TTTModel(tomb);
        assert.equal(tic.atloEll(),"--X|--X|");
      });

    });